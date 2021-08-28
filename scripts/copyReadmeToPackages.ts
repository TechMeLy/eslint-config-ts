import { promises } from 'fs';
import path from 'path';
import glob from 'fast-glob';

(async () => {
  const packages = await glob('kimochi/*', {
    onlyDirectories: true,
    absolute: true,
  });

  for (const packageDir of packages) {
    await promises.copyFile(
      path.join(__dirname, '../README.md'),
      path.join(packageDir, 'README.md'),
    );
  }
})();
