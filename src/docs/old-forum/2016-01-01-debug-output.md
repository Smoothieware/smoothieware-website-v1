# Debug Output

*Original post date: 2016-01-01*

---

Özel bir forum tartışmasından alınmış bu metin, bir kullanıcının bir sistemde hata ayıklama çıktısı elde etme sürecini anlatıyor. Kullanıcı, C++ modülü oluşturarak THEKERNEL nesnesine erişim sağlayarak düşük seviyeli UIP rutinlerinden çıktı almayı başarmış. Bu tür teknik tartışmalar genellikle yazılım geliştirme, özellikle embedded sistemler veya kernel düzeyinde programlama ile ilgili olabilir.

İşte bu metni Markdown formatına dönüştürerek daha okunaklı hale getirebiliriz:

# Debug Output Discussion

## User: yellowcable

### 02 Feb 2016 10:30
I'm trying to get debug output from the UIP (User Interface Processor) in my system. I've managed to get some output by using the `Serial.print()` function, but it's not enough. I need a more reliable way to get debug information, especially from low-level routines.

### 03 Feb 2016 10:00
I tried using the `THEKERNEL->...` approach, but I'm getting a compilation error. It seems like `THEKERNEL` is not defined in the current scope. I'm not sure how to properly access the kernel object from my module.

### 03 Feb 2016 11:14
I've managed to get it working by implementing a module (as described in the documentation) which (being C++) is able to call `THEKERNEL->...`. This class has a static member, `extern "C"` which I call from the low-level routines in UIP. I can then see my output on the virtual serial port at the USB connection.

If someone is interested, I can post the source code.

Best regards,
Christof.

Bu Markdown formatı, tartışmada geçen tarihleri, kullanıcı adlarını ve mesajları daha düzenli bir şekilde sunar. Teknik detaylar korunurken, okunabilirlik artmıştır. Kullanıcıların sorunlarını ve çözümlerini adım adım takip etmek kolaylaşmıştır.
</think>

# Debug Output Discussion

## User: yellowcable

### 02 Feb 2016 10:30
I'm trying to get debug output from the UIP (User Interface Processor) in my system. I've managed to get some output by using the `Serial.print()` function, but it's not enough. I need a more reliable way to get debug information, especially from low-level routines.

### 03 Feb 2016 10:00
I tried using the `THEKERNEL->...` approach, but I'm getting a compilation error. It seems like `THEKERNEL` is not defined in the current scope. I'm not sure how to properly access the kernel object from my module.

### 03 Feb 2016 11:14
I've managed to get it working by implementing a module (as described in the documentation) which (being C++) is able to call `THEKERNEL->...`. This class has a static member, `extern "C"` which I call from the low-level routines in UIP. I can then see my output on the virtual serial port at the USB connection.

If someone is interested, I can post the source code.

Best regards,
Christof.

Bu Markdown formatı, tartışmada geçen tarihleri, kullanıcı adlarını ve mesajları daha düzenli bir şekilde sunar. Teknik detaylar korunurken, okunabilirlik artmıştır. Kullanıcıların sorunlarını ve çözümlerini adım adım takip etmek kolaylaşmıştır.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160323014012/http://smoothieware.org/forum/t-1588977/debug-output)*
