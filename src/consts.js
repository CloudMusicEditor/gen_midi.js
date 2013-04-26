(function() {

    OME.midi.consts = {
        TRACK_MODES: { SINGLE: 0, MULTI_SYNC: 1, MULTI_ASYNC: 2},
        EVENT_TYPES: {
            NOTE_OFF:            0x08,
            NOTE_ON:             0x09,
            NOTE_AFTERTOUCH:     0x0A,
            CONTROLLER:          0x0B,
            PROGRAM_CHANGE:      0x0C,
            CHANNEL_AFTERTOUCH:  0x0D,
            PITCH_BEND:          0x0E,

            SYSEX:               0xF0,
            SYSEX_FINAL:         0xF7,

            META_EVENT:          0xFF
        }
    };


}());
