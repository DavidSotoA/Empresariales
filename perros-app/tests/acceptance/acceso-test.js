import { test } from 'qunit';
import moduleForAcceptance from 'perros-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | acceso');

test('visiting /acceso', function(assert) {
  visit('/');
  click('a:contains("Nosotros")');

  andThen(function() {
    assert.equal(currentURL(), '/about','fallo acceso');
  });
 });

test('visiting /contact', function(assert) {
  visit('/');
  click('a:contains("Contacto")');

  andThen(function() {
    assert.equal(currentURL(), '/contact','fallo contacto');
  });

});
