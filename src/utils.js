(function() {

    OME.midi.util = {

        packInteger: function (integer, minLength, maxLength) {
            // Converts an unsigned magnitude number to a hex string
            // of the same value. e.g. the number 5 would be turned 
            // into "\x05"

            if (typeof minLength === 'undefined') {
                minLength = 1;
            }



            var string = "";
            var len = 0;
            while ((integer & ~0) !== 0) {
                var one_byte = integer & 0xFF;
                string = String.fromCharCode(one_byte) + string;
                integer >>>= 8;
                len += 1;
            }

            if (len < minLength) {
                while (minLength-len > 0) {
                    string = '\x00' + string;
                    len += 1;
                }
            }

            if (typeof maxLength !== 'undefined' && len > maxLength) {
                throw {
                    type: 'overflow'
                };
            }

            return string;
        }

    };

}());
