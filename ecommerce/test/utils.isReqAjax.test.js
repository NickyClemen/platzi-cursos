const assert = require('assert');
const isReqAjaxOrAPI = require('../utils/isReqAjaxOrAPI');

describe('utils - isReqAjaxorAPI', function() {
    describe('when req accepts HTML and is not and XHR', function() {
        it(' should return false', function() {
            const req = {
                accepts: () => true,
                xhr: false,
            };

            const result = isReqAjaxOrAPI(req);
            const expected = false;

            assert.strictEqual(result, expected);
        });
    });

    describe("when req doesn't accepts HTML and is not and XHR", function() {
        it(' should return true', function() {
            const req = {
                accepts: () => false,
                xhr: false,
            };

            const result = isReqAjaxOrAPI(req);
            const expected = true;

            assert.strictEqual(result, expected);
        });
    });

    describe("when req accepts HTML and is an XHR", function() {
        it(' should return true', function() {
            const req = {
                accepts: () => true,
                xhr: true,
            };

            const result = isReqAjaxOrAPI(req);
            const expected = true;

            assert.strictEqual(result, expected);
        });
    });
});