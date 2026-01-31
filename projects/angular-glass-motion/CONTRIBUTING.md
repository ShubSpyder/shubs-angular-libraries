# Contributing to Angular Glass Motion

First off, thank you for considering contributing to Angular Glass Motion! It's people like you that make this library better for everyone.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)

## Code of Conduct

This project and everyone participating in it is governed by our commitment to fostering an open and welcoming environment. We pledge to make participation in our project a harassment-free experience for everyone.

### Our Standards

**Positive behavior includes:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Unacceptable behavior includes:**
- Trolling, insulting/derogatory comments, and personal attacks
- Public or private harassment
- Publishing others' private information without permission
- Other conduct which could reasonably be considered inappropriate

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI (v19 or higher)
- Git

### Familiarize Yourself

1. Read the [README.md](README.md) to understand the library's purpose
2. Review the [API Documentation](docs/API.md)
3. Check out the [Examples](docs/EXAMPLES.md)
4. Look at existing issues and pull requests

## Development Setup

### 1. Fork and Clone

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/ShubSpyder/shubs-angular-libraries.git
cd shubs-angular-libraries/projects/angular-glass-motion
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 4. Build the Library

```bash
ng build angular-glass-motion
```

### 5. Run Tests

```bash
ng test angular-glass-motion
```

## How to Contribute

### Types of Contributions

We welcome various types of contributions:

1. **Bug Fixes** - Fix existing issues
2. **Features** - Add new functionality
3. **Documentation** - Improve or add documentation
4. **Examples** - Create new usage examples
5. **Tests** - Add or improve test coverage
6. **Performance** - Optimize existing code

### Finding Something to Work On

- Check the [Issues](https://github.com/ShubSpyder/shubs-angular-libraries/issues) page
- Look for issues labeled `good first issue` or `help wanted`
- Check the [project roadmap](https://github.com/ShubSpyder/shubs-angular-libraries/projects)

## Coding Standards

### TypeScript Style Guide

Follow the [Angular Style Guide](https://angular.io/guide/styleguide) and these additional rules:

```typescript
// ✅ Good
export class MyComponent {
  @Input() propertyName: string = 'default';
  
  private helperMethod(): void {
    // Implementation
  }
}

// ❌ Bad
export class my_component {
  @Input() property_name = 'default';
  
  helperMethod() {
    // Implementation
  }
}
```

### Code Formatting

- Use 2 spaces for indentation
- Use single quotes for strings
- Add semicolons at the end of statements
- Maximum line length: 100 characters
- Use meaningful variable and function names

### Component Guidelines

```typescript
// Component structure order:
@Component({
  selector: 'lib-component-name',
  standalone: true,
  imports: [],
  template: ``,
  styles: ``
})
export class ComponentName {
  // 1. Public @Input properties
  @Input() publicInput: string;
  
  // 2. Public @Output properties
  @Output() publicOutput = new EventEmitter();
  
  // 3. Public properties
  public publicProperty: number;
  
  // 4. Private properties
  private privateProperty: string;
  
  // 5. Constructor
  constructor() {}
  
  // 6. Lifecycle hooks (in order)
  ngOnInit() {}
  ngAfterViewInit() {}
  ngOnDestroy() {}
  
  // 7. Public methods
  public publicMethod() {}
  
  // 8. Private methods
  private privateMethod() {}
}
```

### CSS/SCSS Guidelines

```css
/* Use meaningful class names */
.glass-container { } /* ✅ Good */
.gc { } /* ❌ Bad */

/* Group related properties */
.element {
  /* Positioning */
  position: relative;
  top: 0;
  left: 0;
  
  /* Box model */
  display: block;
  width: 100%;
  padding: 1rem;
  
  /* Typography */
  font-size: 1rem;
  color: #333;
  
  /* Visual */
  background: white;
  border: 1px solid #ccc;
  
  /* Animation */
  transition: all 0.3s;
}
```

## Testing Guidelines

### Writing Tests

```typescript
describe('AngularGlassMotionComponent', () => {
  let component: AngularGlassMotionComponent;
  let fixture: ComponentFixture<AngularGlassMotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularGlassMotionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AngularGlassMotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default blur value of 10', () => {
    expect(component.blur).toBe(10);
  });

  it('should update blur when input changes', () => {
    component.blur = 20;
    fixture.detectChanges();
    expect(component.blur).toBe(20);
  });
});
```

### Test Coverage

- Aim for at least 80% code coverage
- Test all public methods
- Test edge cases and error conditions
- Test input property changes
- Test event emissions

### Running Tests

```bash
# Run all tests
ng test angular-glass-motion

# Run tests with coverage
ng test angular-glass-motion --code-coverage

# Run tests in headless mode
ng test angular-glass-motion --browsers=ChromeHeadless --watch=false
```

## Pull Request Process

### Before Submitting

1. **Update your branch** with the latest main branch:
   ```bash
   git checkout main
   git pull upstream main
   git checkout your-branch
   git rebase main
   ```

2. **Run all tests** and ensure they pass:
   ```bash
   ng test angular-glass-motion
   ```

3. **Build the library** to ensure no build errors:
   ```bash
   ng build angular-glass-motion
   ```

4. **Update documentation** if you've changed APIs

5. **Update CHANGELOG.md** with your changes

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```bash
# Format
<type>(<scope>): <subject>

# Examples
feat(component): add shadow intensity input property
fix(drag): resolve position calculation bug on resize
docs(readme): update installation instructions
test(component): add tests for opacity input
refactor(styles): optimize CSS custom properties
perf(drag): improve transform performance
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Pull Request Template

When creating a pull request, use this template:

```markdown
## Description
Brief description of the changes

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
Describe the tests you ran and how to reproduce them

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] I have updated the CHANGELOG.md

## Screenshots (if applicable)
Add screenshots to help explain your changes
```

### Review Process

1. A maintainer will review your PR within 3-5 business days
2. Address any requested changes
3. Once approved, a maintainer will merge your PR
4. Your contribution will be included in the next release

## Reporting Bugs

### Before Submitting a Bug Report

1. Check the [existing issues](https://github.com/ShubSpyder/shubs-angular-libraries/issues)
2. Try the latest version of the library
3. Check the documentation to ensure you're using the API correctly

### How to Submit a Bug Report

Create an issue with this information:

**Title:** Short, descriptive title

**Description:**
```markdown
## Bug Description
Clear description of what the bug is

## To Reproduce
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
What you expected to happen

## Actual Behavior
What actually happened

## Screenshots
If applicable, add screenshots

## Environment
- Angular version: [e.g., 19.2.0]
- Library version: [e.g., 0.0.1]
- Browser: [e.g., Chrome 120]
- OS: [e.g., macOS 14]

## Additional Context
Any other context about the problem
```

## Suggesting Enhancements

### Before Submitting an Enhancement

1. Check if the enhancement has already been suggested
2. Determine if it fits the scope of the library
3. Consider if it would benefit most users

### Enhancement Proposal Template

```markdown
## Feature Description
Clear description of the proposed feature

## Use Case
Explain the problem this feature would solve

## Proposed Solution
Describe how you envision the feature working

## Alternatives Considered
Other approaches you've considered

## Additional Context
Any other information, mockups, or examples
```

## Development Tips

### Live Development

Create a test application to develop against:

```bash
# In the workspace root
ng generate application demo-app
```

In `demo-app/src/app/app.component.ts`:
```typescript
import { Component } from '@angular/core';
import { AngularGlassMotionComponent } from 'angular-glass-motion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AngularGlassMotionComponent],
  template: `
    <glass-motion-effect [blur]="20">
      <h1>Testing</h1>
    </glass-motion-effect>
  `
})
export class AppComponent {}
```

### Debugging

1. Use Angular DevTools browser extension
2. Add `console.log` statements strategically
3. Use browser DevTools for CSS debugging
4. Use Angular's `DebugElement` in tests

## Questions?

Feel free to:
- Open a [Discussion](https://github.com/ShubSpyder/shubs-angular-libraries/discussions)
- Ask in the [Issues](https://github.com/ShubSpyder/shubs-angular-libraries/issues) section
- Reach out to maintainers

## Recognition

Contributors will be recognized in:
- The project's README
- Release notes
- The CONTRIBUTORS.md file (if applicable)

Thank you for contributing! 🎉
