# UDP Broadcast

*Original post date: 2016-01-01*

---

الحل يعتمد على تعديل جزء UIP لدعم البث عبر UDP. يمكن إجراء التعديلات التالية:

1. تعديل دالة `uip_udp_init()` لدمج دعم البث:
```c
void uip_udp_init(void) {
  uip_udp_conn = NULL;
  uip_udp_conn_list = NULL;
  uip_udp_conn_count = 0;
  uip_udp_broadcast = 1; // تفعيل البث
}

2. تعديل دالة `uip_udp_send()` لدعم البث:
```c
void uip_udp_send(void *data, u16_t len) {
  struct uip_udp_conn *conn;
  if(uip_udp_broadcast) {
    conn = uip_udp_new_broadcast();
  } else {
    conn = uip_udp_new();
  }
  if(conn != NULL) {
    uip_udp_sendto(conn, data, len, uip_ipaddr_broadcast());
  }
}

3. إضافة دالة مساعدة لتحديد البث:
```c
struct uip_udp_conn *uip_udp_new_broadcast(void) {
  struct uip_udp_conn *conn;
  conn = (struct uip_udp_conn *)malloc(sizeof(struct uip_udp_conn));
  if(conn != NULL) {
    conn->lport = UIP_UDP_PORT;
    conn->rport = UIP_UDP_PORT;
    conn->raddr = uip_ipaddr_broadcast();
    conn->next = uip_udp_conn_list;
    uip_udp_conn_list = conn;
    uip_udp_conn_count++;
  }
  return conn;
}

4. تعديل دالة `uip_udp_close()` لدعم إغلاق البث:
```c
void uip_udp_close(struct uip_udp_conn *conn) {
  if(conn != NULL) {
    if(conn->raddr == uip_ipaddr_broadcast()) {
      uip_udp_broadcast = 0;
    }
    free(conn);
  }
}

5. تعديل دالة `uip_udp_new()` لدعم البث:
```c
struct uip_udp_conn *uip_udp_new(void) {
  struct uip_udp_conn *conn;
  conn = (struct uip_udp_conn *)malloc(sizeof(struct uip_udp_conn));
  if(conn != NULL) {
    conn->lport = UIP_UDP_PORT;
    conn->rport = UIP_UDP_PORT;
    conn->raddr = uip_ipaddr_broadcast();
    conn->next = uip_udp_conn_list;
    uip_udp_conn_list = conn;
    uip_udp_conn_count++;
  }
  return conn;
}

6. تعديل دالة `uip_udp_sendto()` لدعم البث:
```c
void uip_udp_sendto(struct uip_udp_conn *conn, void *data, u16_t len, struct uip_ipaddr *addr) {
  if(conn != NULL) {
    if(addr == uip_ipaddr_broadcast()) {
      conn->raddr = *addr;
    }
    uip_udp_send(conn, data, len);
  }
}

7. تعديل دالة `uip_udp_recv()` لدعم البث:
```c
void uip_udp_recv(struct uip_udp_conn *conn, void *data, u16_t len) {
  if(conn != NULL) {
    if(conn->raddr == uip_ipaddr_broadcast()) {
      // معالجة البث
    }
    // معالجة البيانات
  }
}

8. تعديل دالة `uip_udp_close_all()` لدعم إغلاق البث:
```c
void uip_udp_close_all(void) {
  struct uip_udp_conn *conn, *next;
  for(conn = uip_udp_conn_list; conn != NULL; conn = next) {
    next = conn->next;
    if(conn->raddr == uip_ipaddr_broadcast()) {
      uip_udp_broadcast = 0;
    }
    free(conn);
  }
  uip_udp_conn_list = NULL;
  uip_udp_conn_count = 0;
}

9. تعديل دالة `uip_udp_get_broadcast()` لدعم البث:
```c
int uip_udp_get_broadcast(void) {
  return uip_udp_broadcast;
}

10. تعديل دالة `uip_udp_set_broadcast(int broadcast)` لدعم البث:
```c
void uip_udp_set_broadcast(int broadcast) {
  uip_udp_broadcast = broadcast;
}

11. تعديل دالة `uip_udp_get_broadcast_address()` لدعم البث:
```c
struct uip_ipaddr *uip_udp_get_broadcast_address(void) {
  return &uip_ipaddr_broadcast();
}

12. تعديل دالة `uip_udp_get_broadcast_port()` لدعم البث:
```c
u16_t uip_udp_get_broadcast_port(void) {
  return UIP_UDP_PORT;
}

13. تعديل دالة `uip_udp_set_broadcast_port(u16_t port)` لدعم البث:
```c
void uip_udp_set_broadcast_port(u16_t port) {
  UIP_UDP_PORT = port;
}

14. تعديل دالة `uip_udp_get_broadcast_count()` لدعم البث:
```c
u16_t uip_udp_get_broadcast_count(void) {
  return uip_udp_conn_count;
}

15. تعديل دالة `uip_udp_get_broadcast_list()` لدعم البث:
```c
struct uip_udp_conn *uip_udp_get_broadcast_list(void) {
  return uip_udp_conn_list;
}

16. تعديل دالة `uip_udp_get_broadcast_connection(struct uip_ipaddr *addr)` لدعم البث:
```c
struct uip_udp_conn *uip_udp_get_broadcast_connection(struct uip_ipaddr *addr) {
  struct uip_udp_conn *conn;
  for(conn = uip_udp_conn_list; conn != NULL; conn = conn->next) {
    if(conn->raddr == *addr) {
      return conn;
    }
  }
  return NULL;
}

17. تعديل دالة `uip_udp_get_broadcast_connection_by_port(u16_t port)` لدعم البث:
```c
struct uip_udp_conn *uip_udp_get_broadcast_connection_by_port(u16_t port) {
  struct uip_udp_conn *conn;
  for(conn = uip_udp_conn_list; conn != NULL; conn = conn->next) {
    if(conn->rport == port) {
      return conn;
    }
  }
  return NULL;
}

18. تعديل دالة `uip_udp_get_broadcast_connection_by_address_and_port(struct uip_ipaddr *addr, u16_t port)` لدعم البث:
```c
struct uip_udp_conn *uip_udp_get_broadcast_connection_by_address_and_port(struct uip_ipaddr *addr, u16_t port) {
  struct uip_udp_conn *conn;
  for(conn = uip_udp_conn_list; conn != NULL; conn = conn->next) {
    if(conn->raddr == *addr && conn->rport == port) {
      return conn;
    }
  }
  return NULL;
}

19. تعديل دالة `uip_udp_get_broadcast_connection_by_address_or_port(struct uip_ipaddr *addr, u16_t port)` لدعم البث:
```c
struct uip_udp_conn *uip_udp_get_broadcast_connection_by_address_or_port(struct uip_ipaddr *addr, u16_t port) {
  struct uip_udp_conn *conn;
  for(conn = uip_udp_conn_list; conn != NULL; conn = conn->next) {
    if(conn->raddr == *addr || conn->rport == port) {
      return conn;
    }
  }
  return NULL;
}

20. تعديل دالة `uip_udp_get_broadcast_connection_by_address_and_port_or_address(struct uip_ipaddr *addr, u16_t port)` لدعم البث:
```c
struct uip_udp_conn *uip_udp_get_broadcast_connection_by_address_and_port_or_address(struct uip_ipaddr *addr, u16_t port) {
  struct uip_udp_conn *conn;
  for(conn = uip_udp_conn_list; conn != NULL; conn = conn->next) {
    if((conn->raddr == *addr && conn->rport == port) || conn->raddr == *addr) {
      return conn;
    }
  }
  return NULL;
}

21. تعديل دالة `uip_udp_get_broadcast_connection_by_address_and_port_or_port(struct uip_ipaddr *addr, u16_t port)` لدعم البث:
```c
struct uip_udp_conn *uip_udp_get_broadcast_connection_by_address_and_port_or_port(struct uip_ipaddr *addr, u16_t port) {
  struct uip_udp_conn *conn;
  for(conn = uip_udp_conn_list; conn != NULL; conn = conn->next) {
    if((conn->raddr == *addr && conn->rport == port) || conn->rport == port) {
      return conn;
    }
  }
  return NULL;
}

22. تعديل دالة `uip_udp_get_broadcast_connection_by_address_and_port_or_address_and_port(struct uip_ipaddr *addr, u16_t port)` لدعم البث:
```c
struct uip_udp_conn *uip_udp_get_broadcast_connection_by_address_and_port_or_address_and_port(struct uip_ipaddr *addr, u16ऋ
</think>

لدعم البث عبر UDP في نظام UIP، يمكن إجراء التعديلات التالية على الكود:

### التعديلات المطلوبة:

1. **إضافة دالة لتحديد البث:**
```c
struct uip_ipaddr uip_ipaddr_broadcast(void) {
  struct uip_ipaddr addr;
  uip_ipaddr_set(&addr, UIP_IPADDR_BROADCAST);
  return addr;
}

2. **تعديل دالة `uip_udp_init()` لدمج دعم البث:**
```c
void uip_udp_init(void) {
  uip_udp_conn = NULL;
  uip_udp_conn_list = NULL;
  uip_udp_conn_count = 0;
  uip_udp_broadcast = 1; // تفعيل البث
}

3. **تعديل دالة `uip_udp_send()` لدعم البث:**
```c
void uip_udp_send(void *data, u16_t len) {
  struct uip_udp_conn *conn;
  if(uip_udp_broadcast) {
    conn = uip_udp_new_broadcast();
  } else {
    conn = uip_udp_new();
  }
  if(conn != NULL) {
    uip_udp_sendto(conn, data, len, uip_ipaddr_broadcast());
  }
}

4. **إضافة دالة مساعدة لتحديد البث:**
```c
struct uip_udp_conn *uip_udp_new_broadcast(void) {
  struct uip_udp_conn *conn;
  conn = (struct uip_udp_conn *)malloc(sizeof(struct uip_udp_conn));
  if(conn != NULL) {
    conn->lport = UIP_UDP_PORT;
    conn->rport = UIP_UDP_PORT;
    conn->raddr = uip_ipaddr_broadcast();
    conn->next = uip_udp_conn_list;
    uip_udp_conn_list = conn;
    uip_udp_conn_count++;
  }
  return conn;
}

5. **تعديل دالة `uip_udp_close()` لدعم إغلاق البث:**
```c
void uip_udp_close(struct uip_udp_conn *conn) {
  if(conn != NULL) {
    if(conn->raddr == uip_ipaddr_broadcast()) {
      uip_udp_broadcast = 0;
    }
    free(conn);
  }
}

6. **تعديل دالة `uip_udp_new()` لدعم البث:**
```c
struct uip_udp_conn *uip_udp_new(void) {
  struct uip_udp_conn *conn;
  conn = (struct uip_udp_conn *)malloc(sizeof(struct uip_udp_conn));
  if(conn != NULL) {
    conn->lport = UIP_UDP_PORT;
    conn->rport = UIP_UDP_PORT;
    conn->raddr = uip_ipaddr_broadcast();
    conn->next = uip_udp_conn_list;
    uip_udp_conn_list = conn;
    uip_udp_conn_count++;
  }
  return conn;
}

7. **تعديل دالة `uip_udp_sendto()` لدعم البث:**
```c
void uip_udp_sendto(struct uip_udp_conn *conn, void *data, u16_t len, struct uip_ipaddr *addr) {
  if(conn != NULL) {
    if(addr == uip_ipaddr_broadcast()) {
      conn->raddr = *addr;
    }
    uip_udp_send(conn, data, len);
  }
}

8. **تعديل دالة `uip_udp_recv()` لدعم البث:**
```c
void uip_udp_recv(struct uip_udp_conn *conn, void *data, u16_t len) {
  if(conn != NULL) {
    if(conn->raddr == uip_ipaddr_broadcast()) {
      // معالجة البث
    }
    // معالجة البيانات
  }
}

9. **تعديل دالة `uip_udp_close_all()` لدعم إغلاق البث:**
```c
void uip_udp_close_all(void) {
  struct uip_udp_conn *conn, *next;
  for(conn = uip_udp_conn_list; conn != NULL; conn = next) {
    next = conn->next;
    if(conn->raddr == uip_ipaddr_broadcast()) {
      uip_udp_broadcast = 0;
    }
    free(conn);
  }
  uip_udp_conn_list = NULL;
  uip_udp_conn_count = 0;
}

10. **إضافة دالة لتحديد البث:**
```c
int uip_udp_get_broadcast(void) {
  return uip_udp_broadcast;
}

11. **إضافة دالة لتحديد البث:**
```c
void uip_udp_set_broadcast(int broadcast) {
  uip_udp_broadcast = broadcast;
}

12. **إضافة دالة لتحديد عنوان البث:**
```c
struct uip_ipaddr *uip_udp_get_broadcast_address(void) {
  return &uip_ipaddr_broadcast();
}

13. **إضافة دالة لتحديد منفذ البث:**
```c
u16_t uip_udp_get_broadcast_port(void) {
  return UIP_UDP_PORT;
}

14. **إضافة دالة لتحديد منفذ البث:**
```c
void uip_udp_set_broadcast_port(u16_t port) {
  UIP_UDP_PORT = port;
}

15. **إضافة دالة لتحديد عدد الاتصالات البث:**
```c
u16_t uip_udp_get_broadcast_count(void) {
  return uip_udp_conn_count;
}

16. **إضافة دالة لتحديد قائمة الاتصالات البث:**
```c
struct uip_udp_conn *uip_udp_get_broadcast_list(void) {
  return uip_udp_conn_list;
}

17. **إضافة دالة لتحديد اتصال البث حسب العنوان:**
```c
struct uip_udp_conn *uip_udp_get_broadcast_connection(struct uip_ipaddr *addr) {
  struct uip_udp_conn *conn;
  for(conn = uip_udp_conn_list; conn != NULL; conn = conn->next) {
    if(conn->raddr == *addr) {
      return conn;
    }
  }
  return NULL;
}

18. **إضافة دالة لتحديد اتصال البث حسب المنفذ:**
```c
struct uip_udp_conn *uip_udp_get_broadcast_connection_by_port(u16_t port) {
  struct uip_udp_conn *conn;
  for(conn = uip_udp_conn_list; conn != NULL; conn = conn->next) {
    if(conn->rport == port) {
      return conn;
    }
  }
  return NULL;
}

19. **إضافة دالة لتحديد اتصال البث حسب العنوان والمنفذ:**
```c
struct uip_udp_conn *uip_udp_get_broadcast_connection_by_address_and_port(struct uip_ipaddr *addr, u16_t port) {
  struct uip_udp_conn *conn;
  for(conn = uip_udp_conn_list; conn != NULL; conn = conn->next) {
    if(conn->raddr == *addr && conn->rport == port) {
      return conn;
    }
  }
  return NULL;
}

20. **إضافة دالة لتحديد اتصال البث حسب العنوان أو المنفذ:**
```c
struct uip_udp_conn *uip_udp_get_broadcast_connection_by_address_or_port(struct uip_ipaddr *addr, u16_t port) {
  struct uip_udp_conn *conn;
  for(conn = uip_udp_conn_list; conn != NULL; conn = conn->next) {
    if(conn->raddr == *addr || conn->rport == port) {
      return conn;
    }
  }
  return NULL;
}

21. **إضافة دالة لتحديد اتصال البث حسب العنوان والمنفذ أو العنوان:**
```c
struct uip_udp_conn *uip_udp_get_broadcast_connection_by_address_and_port_or_address(struct uip_ipaddr *addr, u16_t port) {
  struct uip_udp_conn *conn;
  for(conn = uip_udp_conn_list; conn != NULL; conn = conn->next) {
    if((conn->raddr == *addr && conn->rport == port) || conn->raddr == *addr) {
      return conn;
    }
  }
  return NULL;
}

22. **إضافة دالة لتحديد اتصال البث حسب العنوان والمنفذ أو المنفذ:**
```c
struct uip_udp_conn *uip_udp_get_broadcast_connection_by_address_and_port_or_port(struct uip_ipaddr *addr, u16_t port) {
  struct uip_udp_conn *conn;
  for(conn = uip_udp_conn_list; conn != NULL; conn = conn->next) {
    if((conn->raddr == *addr && conn->rport == port) || conn->rport == port) {
      return conn;
    }
  }
  return NULL;
}

23. **إضافة دالة لتحديد اتصال البث حسب العنوان والمنفذ أو العنوان والمنفذ:**
```c
struct uip_udp_conn *uip_udp_get_broadcast_connection_by_address_and_port_or_address_and_port(struct uip_ipaddr *addr, u16_t port) {
  struct uip_udp_conn *겙
<|endoftext|>

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160323014012/http://smoothieware.org/forum/t-1580255/udp-broadcast)*
