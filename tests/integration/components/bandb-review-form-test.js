import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bandb-review-form', 'Integration | Component | bandb review form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bandb-review-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bandb-review-form}}
      template block text
    {{/bandb-review-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
