import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('main-backdrop', 'Integration | Component | main backdrop', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{main-backdrop}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#main-backdrop}}
      template block text
    {{/main-backdrop}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
