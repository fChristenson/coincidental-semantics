# Coincidental semantics

## What we will cover

- The importance of being deliberate in code
- How one quick decision can create legacy
- How to think about semantics

## Notes

A while back I was asked to help a coworker figure out how to deal with a new feature requirement.

Our system had a new vendor that wanted to integrate and they would allow their users to create an
account in our system and then the users could get to our system either through our standard web
application or this vendors mobile app.

To do this my coworker had created an API for this vendor.

The problem was that we now needed to meet certain requirements for the integration to work, one of those
requirements where that the vendor wanted to create and query users by their username.
