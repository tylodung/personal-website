---
title: "Flexbox Overview"
date: "2017-08-10"
---

## Flexbox Notes

Flexbox is the first layout element to come to CSS. It is not designed to layout whole webpages (use CSS Grid for that)

How to make an element a flex container:

```css
element {
  display: flex;
}
```

A flex container has access to the following CSS properties:

* **flex-direction** - sets direction of the main axis
  * column
  * row
* **flex-wrap** - determines if items in flex container wrap or not.
  * wrap
  * nowrap
* **flex-flow** - shorthand for flex-direction and flex-wrap.
* **justify-content** - positions items on main axis.
  * flex-start
  * flex-end
  * center
  * space-around
  * space-between
* **align-items** - positions items on cross axis.
  * flex-start
  * flex-end
  * center
  * space-around
  * space-between
* **align-content** - set how multiple lines are spaced apart from each other. ( no effect if only one line )
  * flex-start
  * flex-end
  * center
  * space-around
  * space-between

A flex containers child elemnents are called items. They also get access to some useful properties:

* **flex-grow** - Sets growth rate of the flex item when its flex container expands
* **flex-basis** - Sets absolute width of a flex item.
  * Never use width on your flex items, instead use flex-basis.
* **flex-shrink** -  Sets shrink rate of the flex item when its flex container expands
* **flex** - shorthand for flex-grow, flex-shrink, and flex-basis
* **order** - sets order of a flex item
* **align-self** - allows an item to align itself on the cross axis.

To be continued...
