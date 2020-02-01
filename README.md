# library-components-template
A partir de este código vas a poder comenzar a manejar tu propia librería de componentes.

## Storybook Usage

![Storybook README addon](https://user-images.githubusercontent.com/5140611/54478027-86d38400-4816-11e9-96a0-aecef64e3ea7.png)

Hope it is very simple.

```js
import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../components/Button';
import ButtonReadme from '../components/Button/README.md';

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      // Show readme before story
      content: ButtonReadme,
      // Show readme at the addons panel
      sidebar: ButtonReadme,
    },
  })
  .add('Button', () => <Button />);
```

It is possible to override docs for story

```js
import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../components/Button';
import ButtonReadme from '../components/Button/README.md';

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      content: ButtonReadme,
      sidebar: ButtonReadme,
    },
  })
  .add('Button', () => <Button />)
  .add('Button', () => <Button />)
  .add('Button', () => <Button />, {
    readme: {
      // override docs
      content: CustomButtonReadme,
      sidebar: CustomButtonReadme,
    },
  });
```

## Lerna Usage

<p align="center">
  <img alt="Lerna" src="https://cloud.githubusercontent.com/assets/952783/15271604/6da94f96-1a06-11e6-8b04-dc3171f79a90.png" width="480">
</p>

```sh
lerna publish              # publish packages that have changed since the last release
lerna publish from-git     # explicitly publish packages tagged in the current commit
lerna publish from-package # explicitly publish packages where the latest version is not present in the registry
```

When run, this command does one of the following things:

- Publish packages updated since the last release (calling [`lerna version`](https://github.com/lerna/lerna/tree/master/commands/version#readme) behind the scenes).
  - This is the legacy behavior of lerna 2.x
- Publish packages tagged in the current commit (`from-git`).
- Publish packages in the latest commit where the version is not present in the registry (`from-package`).
- Publish an unversioned "canary" release of packages (and their dependents) updated in the previous commit.

> Lerna will never publish packages which are marked as private (`"private": true` in the `package.json`).

During all publish operations, appropriate [lifecycle scripts](#lifecycle-scripts) are called in the root and per-package (unless disabled by [`--ignore-scripts](#--ignore-scripts)).

Check out [Per-Package Configuration](#per-package-configuration) for more details about publishing scoped packages, custom registries, and custom dist-tags.
