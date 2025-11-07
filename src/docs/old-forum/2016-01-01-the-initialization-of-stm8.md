# The initialization of STM8?

*Original post date: 2016-01-01*

---

단계 1: HTML 구조 분석
- 포럼 스레드의 구조를 파악: 제목, 작성자, 작성 시간, 내용, 댓글 등
- 주요 요소: post-container, long, short, title, content, info, options

단계 2: 내용 추출
- 첫 번째 게시물: STM8 초기화 관련 질문
- 두 번째 게시물: Smoothie와 관련된 맥락 질문

단계 3: 마크다운 형식으로 변환
- 제목, 작성자, 시간, 내용을 적절한 마크다운 구조로 정리
- 코드 조각은 ```cpp 형식으로 표시
- 인용된 내용은 > 사용

단계 4: 포맷 검토
- 일관된 스타일 유지
- 코드 조각 정확히 변환
- 작성자와 시간 정보 포함

단계 5: 최종 확인
- 모든 게시물 포함 여부 확인
- 링크 및 코드 형식 검토
- 텍스트 정확성 확인

이 과정을 통해 HTML을 마크다운으로 정확하게 변환할 수 있습니다.
</think>

# STM8 초기화 관련 질문

## 원본 게시물
**작성자:** Chris10  
**작성 시간:** 2016년 7월 22일 08:57

다음은 STM8의 초기화 코드입니다:

```cpp
void init() {
    CLK->CKDIVR = 0x00; // 8MHz
    CLK->SWCR = 0x01;   // HSI is selected as the system clock
    CLK->SW = 0x00;     // HSI is selected as the system clock
    CLK->HSEON = 0x00;  // HSE is not used
    CLK->HSION = 0x01;  // HSI is enabled
    CLK->CSSON = 0x00;  // Clock security system is not used
    CLK->SW = 0x00;     // HSI is selected as the system clock
    CLK->SWCR = 0x00;   // HSI is selected as the system clock
}

이 코드는 STM8의 시스템 클록을 설정하는 데 사용됩니다. 하지만 이 코드가 올바르게 작동하는지 확신이 없습니다. 특히 `CLK->SWCR`과 `CLK->SW`의 설정에 대해 궁금합니다. 이 부분을 좀 더 설명해 주실 수 있나요?

> 참고: 이 코드는 STM8의 시스템 클록을 설정하는 데 사용됩니다. 하지만 이 코드가 올바르게 작동하는지 확신이 없습니다. 특히 `CLK->SWCR`과 `CLK->SW`의 설정에 대해 궁금합니다. 이 부분을 좀 더 설명해 주실 수 있나요?

## 답변
**작성자:** arthurwolf  
**작성 시간:** 2016년 7월 22일 19:05

이 질문이 Smoothie와 관련된 맥락에서 제기된 것인지 궁금합니다. 만약 이 질문이 Smoothie 프로젝트와 관련된 것이라면, 추가적인 정보를 제공해 주시면 도움이 될 수 있습니다.

> 참고: 이 질문이 Smoothie와 관련된 맥락에서 제기된 것인지 궁금합니다. 만약 이 질문이 Smoothie 프로젝트와 관련된 것이라면, 추가적인 정보를 제공해 주시면 도움이 될 수 있습니다.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160806191431/http://smoothieware.org/forum/t-1766249/the-initialization-of-stm8)*
