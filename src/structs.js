JSMIDGEN.struct = {};

JSMIDGEN.struct.Track = Class.extend({
    init: function() {
    },
    events: [],
    _stateCache: [],
    describeStateAtTime: function(beginningOrEndOfInstant, time) {
        // TODO
        // creates an JSMIDGEN.struct.State object that describes
        // the state of this track (i.e. program name, volume,
        // pitch bend, etc.)
        // 
        // Parameter beginningOrEndOfInstant specifies whether
        // you would like the state of the track at the beginning
        // of the instant specified by `time` or at the end.
    }
});

JSMIDGEN.struct.Event = Class.extend({
    command: null,
    channel: null,
    data: null
});

JSMIDGEN.struct.State = {};
