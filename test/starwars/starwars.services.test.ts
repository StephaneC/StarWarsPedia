'use strict';

import 'mocha';
import { assert } from 'chai';
import { searchFilms, searchPeople } from '../../src/starwars/starwars.services';

describe('Starwars services tests', function() {
    this.timeout(5000);
    describe('serach people', function() {
        it('search r2', async () => {
            const res = await searchPeople('r2');
            assert.equal(1, res.length);
            assert.equal('R2-D2', res[0].name);
        });
        it('search empty', async () => {
            const res = await searchPeople('');
            assert.equal(1, res.length);
            assert.equal('R2-D2', res[0].name);
        });
        it('search skywalker', async () => {
            const res = await searchPeople('skywalker');
            assert.equal(1, res.length);
            assert.equal('R2-D2', res[0].name);
        });
    });
});