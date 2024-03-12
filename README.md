# Reactive Atomic Design System 

Why naming it Reactive? - It is just to rhyme that a design system with the capiblities of integrating with react js and react native. The idea here is a consistent design system, built over MUI that help us create consistent components and themes for the application. 

## Why Vite?

Vite and Create React App (CRA) are both tools that help you create new React applications, but they have different approaches and benefits. Let’s explore why you might choose Vite over the traditional Create React App:

- Superior Performance:
- Faster Development and Build Times
- Extensive Plugin Compatibility
- Native ES Modules (ESM)

## Getting Started ?

The Core idea behind this library is that we dont have to reinvent the wheel, and create every single component ourselves, all the interconnections between components should be handled by a very reliable library MUI.

Keep in mind that in order to keep this package updated is to follow the versioning of the library. It is a responsibility of an engieer and the team to look for a latest version and impliment and modify the breaking change whenever it release.


### Atomic Design System

The Atomic Design System is a methodology for creating design systems. It's inspired by the natural world and chemistry, and it breaks down interfaces into fundamental building blocks.

# Components of Atomic Design

The Atomic Design system consists of five distinct levels:

1. **Atoms**: These are the basic building blocks of matter. In the context of web interfaces, atoms are our HTML tags, such as a form label, an input, or a button.

2. **Molecules**: Molecules are groups of atoms bonded together. These combinations of atoms take on their own unique properties and become more tangible and operational than atoms¹.

3. **Organisms**: Organisms are assemblies of molecules functioning together as a unit. These relatively complex structures can range from single-celled organisms all the way up to incredibly sophisticated organisms like human beings¹.

4. **Templates**: At this stage, we start to see the design coming together and forming shapes. However, the templates are not quite ready designs yet. They are the wireframe version of a page.

5. **Pages**: Pages are specific instances of templates that show what a UI looks like with real representative content in place.

# Benefits of Atomic Design

Atomic Design allows us to:

- **Traverse from abstract to concrete**: Because of the hierarchical nature of Atomic Design, we can start from abstract beginnings and gradually get more concrete as we traverse through the system.

- **Promote consistency and cohesion**: Atomic Design provides a clear, direct correlation between the design system and the final product. This results in a more cohesive, consistent user interface.

- **Easier to maintain**: It's easier to manage your design system as changes made at atomic level can propagate to molecules, organisms, templates, and pages.

- **Facilitate communication between team members**: It gives a common language for different teams. Designers, developers, and product managers can use this system to communicate effectively.

Atomic Design is a powerful approach that allows digital designers to create both simple and complex systems from a series of reusable components¹.

# Tailwind

The Scaffold support Tailwind classes, so it is recommended for and molecules and orgnaisms, Please use Tailwind CSS rather than inline styling and also avoid using styled component where ever possible.
