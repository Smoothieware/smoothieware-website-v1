
# Now that we know that VBB is getting power, we are going to check if each stepper motor driver is capable of making a stepper motor rotate.

To do this we will use [Pronterface](pronterface.md) to send [G-Codes](/supported-g-codes.md) that will instruct the board to rotate the motors, and check if the motors do indeed rotate.

First, connect [Pronterface](pronterface.md) to your Smoothieboard.

Then, turn your Power Supply ON, and make sure Smoothieboard is powered ( RED `VBB` LED should be ON ).

Then here are the instructions for each motor :

## Test M1 ( X axis )

Make sure you have a stepper motor attached to your M1 stepper motor driver.

In [Pronterface](pronterface.md), send :

```
G92 X0
G1 X100 F1000
```

You should see the stepper motor turning, if you do, move to the next test item. If not, answer **No**.

## Test M2 ( Y axis )

Make sure you have a stepper motor attached to your M2 stepper motor driver.

In [Pronterface](pronterface.md), send :

```
G92 Y0
G1 Y100 F1000
```

You should see the stepper motor turning, if you do, move to the next test item. If not, answer **No**.

## Test M3 ( Z axis )

Make sure you have a stepper motor attached to your M3 stepper motor driver. If you do not have a Z axis ( like in a simple laser cutter ), ignore this step.

In [Pronterface](pronterface.md), send :

```
G92 Z0
G1 Z100 F1000
```

You should see the stepper motor turning, if you do, move to the next test item. If not, answer **No**.

## Test M4 ( first extruder )

Make sure you have a stepper motor attached to your M4 stepper motor driver. If you do not have an extruder ( like in a laser cutter or CNC mill ), ignore this step.

In [Pronterface](pronterface.md), send :

```
T0
G92 E0
G1 E100 F1000
```

You should see the stepper motor turning, if you do, move to the next test item. If not, answer **No**.

## Test M5 ( second extruder )

Make sure you have a stepper motor attached to your M5 stepper motor driver.

If you do not have a second extruder, ignore this step.

Make sure you correctly configured your Smoothieboard for dual extrusion, see [Dual extrusion guide](/3d-printer-guide.md#toc31)

In [Pronterface](pronterface.md), send :

```
T1
G92 E0
G1 E100 F1000
```

You should see the stepper motor turning, if you do, move to the next test item. If not, answer **No**.

## Did they all turn ?

If all of the stepper motors turned when instructed, answer **Yes**

Otherwise, answer **No**.

> [!NOTE]
> This series of tests assumes a cartesian machine, in which you can independently control your X, Y and Z axis, and therefore independently move your M1, M2 and M3 motors.
> 
> But on a [delta](delta.md) or H-bot machine, several motors must move at a time to move one given axis.
> 
> Therefore, on those types of machines, simply move your head around, and see if one of the motors does not move. If one does not move, answer **No**, if they all move, answer **Yes**.
> 
> This is not relevant to the extruders.

---

[**Yes**](/debug/vbb_is_getting_power.md)

[**No**](/debug/vbb_is_not_getting_power.md)
