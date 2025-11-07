---
permalink: /coding-standards
---

# Coding Standards

Lots of people work together on Smoothie's code.

{% include developers/contributing-for-include.md %}

In order to make everybody's life easier, and keep the codebase clean and manageable, here are a few rules you should follow when coding Smoothie stuff:


## Do not include other headers in a header file unless absolutely necessary to define something in that header

Un-necessary includes clutter the code, and makes compile time longer.

Bad example ( in a .h file ):

```cpp
#include "Kernel.h"
#include "PanelScreen.h"
#include "Button.h"
#include <array>
#include <vector>
```

Instead do:

```cpp
#include <array>
#include <vector>

class Kernel;
class PanelScreen;
class Button;
```

However, you still need to include whatever is necessary in your .cpp file.

## Use class pointers in classes and use Class xxx in header to forward define it

Same thing: no unnecessary includes in .h files:

```cpp
class Robot;
class Stepper;
class Planner;

class Kernel {
    public:
        Kernel();

        Robot* robot;
        Stepper* stepper;
        Planner* planner;
};
```

## Include headers only in cpp files, and only ones that are needed to fully define a class

Never include something in the header file (unless absolutely necessary). Include it in the .cpp file, and only if it is really required.

## Do not put code in a method in a header unless absolutely necessary

The only time this is needed is for time-critical code that must be inlined.

## Do not use #ifdef in the code

This is rarely needed and is only currently used by the makefile and main.cpp to eliminate named modules.

## Follow C++ practices

- Class fields should be private, use getters and setters where necessary.
- Methods not needed to be called externally should be private.
- Try not to use multiple inheritance.
- Make destructors virtual.
- Use std::STL where appropriate.
- Use C++11 where appropriate.

## Code formatting

- Four (4) spaces per indent, no tabs please.
- Mostly follows linux bracket style [Linux Kernel Coding Style](http://astyle.sourceforge.net/astyle.html#_style=linux).

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <iframe width="640" height="360" src="https://www.youtube.com/embed/SsoOG6ZeyUI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
{:/nomarkdown}

## Must compile cleanly

Your contributed code must compile cleanly with no warnings.

## Test your code!!

This is really important.

If you make changes to existing code make sure it is thoroughly tested before issuing a pull request.

If it is a new feature it should be tested as well as possible, or request testing by pointing to your branch in your repo.

## Keep pull requests small

Only one feature or bug fix or refactor should go into a specific pull request, it is very hard to scan a huge pull request and to test it, so keep the changes small and testable.

Please follow git flow practices where possible.

Branches should be called feature/feature-name or fix/fix-name, and only contain changes relevant to that feature or fix.

If other changes need to be made that are not directly related to this change but this change relies on them then it should be noted in the pull request that it depends on pull request #xxxx.

## Do not use blocking wait loops

There must not be any blocking wait loops in the code, there is no RTOS here so a blocking wait loop stops everything from running, and if long enough will trigger the watchdog timer.

In the case of needing to wait for several milliseconds you can use the `safe_delay_ms` or `safe_delay_us` function call, which will call on_idle() to keep things going.

However, note this is not an accurate delay. For accurate timing, an interrupt timer must be used.
