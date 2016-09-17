import { test } from 'qunit';
import moduleForAcceptance from 'perros-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | lista perros');

test('visiting /lista-perros', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/perros', 'fallo perros');
  });
 });

  test('visiting /lista-perros', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.listing').length, 3 , '3 perros en la lista');
  });

});
