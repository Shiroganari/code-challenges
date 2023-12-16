var expect = function(val) {
    return {
        toBe: function (num) {
            if (num === val) return true;
            else throw new Error('Not Equal');
        },

        notToBe: function (num) {
            if (num !== val) return true;
            else throw new Error('Equal');
        }
    }
};
