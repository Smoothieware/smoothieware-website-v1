# The initialization of STM8?

*Original post date: 2016-01-01*

---

# The initialization of STM8?

**Posted by Chris10 on 22 Jul 2016 08:57**

```c
void init_TIM1(void) {
    // Enable clock for TIM1
    CLK_HS;

    // Set the prescaler and auto-reload values
    TIM1->PSC = 0x00;
    TIM1->ARR = 0xFFFF;

    // Enable the timer
    SET_BIT(TIM1->CR1, TIM_CR1_CEN);
}

[Reply](#) | [Options](#)

---

**Re: The initialization of STM8?**

**Posted by arthurwolf on 22 Jul 2016 19:05**

Maybe I am missing some context here. Is this related to Smoothie in any way ?

[Reply](#) | [Options](#)


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160930035716/http://smoothieware.org/forum/t-1766249/the-initialization-of-stm8)*
