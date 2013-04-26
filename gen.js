(function() {
    
    OME.midi.gen = {};

    OME.midi.gen.genMIDI = function genMIDI(data) {
        
        var header = "MThd\x00\x00\x00\x06";
        var tms = OME.midi.consts.TRACK_MODES;

        switch(data.track_mode) {
            case tms.SINGLE:
                header += '\x00\x00';
                break;
            case tms.MULTI_SYNC:
                header += '\x00\x01';
                break;
            case tms.MULTI_ASYNC:
                header += '\x00\x02';
                break;
        }

        header += OME.midi.util.packInteger(data.tracks.length, 2, 2);
        header += OME.midi.util.packInteger(data.deltaTicks, 2, 2);

        var body = "";
        var evt_types = OME.midi.consts.EVENT_TYPES;
        var trackData;

        for (var t = 0, ntracks = data.tracks.length; t < ntracks; t++) {
            // Create a track chunk. Requires first generating all of
            // the track's data chunks, so we can report the length.

            var track = data.tracks[t];
            body += "MTrk";
            trackData = "";

            for (var i = 0, l = track.events.length; i < l; i++) {
                var evt = track.events[i];

                switch(evt.type) {
                    
                }
            }

            body += OME.midi.util.packInteger(trackData.length, 4, 4);
            body += trackData;

        }


        return header;
    }


}());

$(function(){

    console.log(escape(OME.midi.gen.genMIDI({
        track_mode: OME.midi.consts.TRACK_MODES.SINGLE,
        tracks: [

        ],
        deltaTicks: 8
    })));

});
