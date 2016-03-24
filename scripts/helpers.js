var utils = require('../lib/utils');

var isUrl = utils.isUrl;
var urljoin = utils.urljoin;

hexo.extend.helper.register('github_release_url', function (version) {
  version = version || ('v' + this.config.aframe_version);
  return urljoin(this.config.github.aframe.url, 'releases', 'tag', version);
});

hexo.extend.helper.register('github_file_url', function (path) {
  return urljoin(this.config.github.aframe.url, 'blob', 'master', path);
});

hexo.extend.helper.register('website_github_file_url', function (path) {
  // if (this.config.aframe_version === '0.1.0') {
  return urljoin(this.config.github.aframe_site.url, 'blob', 'ed97d6d', this.config.source_dir, path.replace(/\.html$/, '.md'));
  // }
});

hexo.extend.helper.register('website_github_edit_url', function (path) {
  return urljoin(this.config.github.aframe_site.url, 'edit', 'master', this.config.source_dir, path.replace(/\.html$/, '.md'));
});

hexo.extend.helper.register('page_url', function (path, options) {
  return this.url_for(path, options).replace(/index\.html$/, '');
});

hexo.extend.helper.register('example_url', function (item) {
  return urljoin(this.url_for('examples'), item.section, item.slug) + '/';
});

hexo.extend.helper.register('docs_url_prefix', function (item) {
  return this.page.source.split('/', 2).join('/') + '/';
});

hexo.extend.helper.register('is_external_url', isUrl);

hexo.extend.filter.register('urljoin', urljoin);

// http://localhost:4000/docs/0.2.0/guide/installation.html

// fix github edit page
// fix githbu_file_url
// change `.md`.
// catch all for /docs/<no version>/ -> latest
