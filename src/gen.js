JSMIDGEN.gen = {};

JSMIDGEN.gen.genMIDI = function genMIDI(data) {
    
    var header = "MThd\x00\x00\x00\x06";
    var tms = JSMIDGEN.consts.TRACK_MODES;

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

    header += JSMIDGEN.util.packInteger(data.tracks.length, 2, 2);
    header += JSMIDGEN.util.packInteger(data.deltaTicks, 2, 2);

    var body = "";
    var evt_types = JSMIDGEN.consts.EVENT_TYPES;
    var trackData;

    for (var t = 0, ntracks = data.tracks.length; t < ntracks; t++) {
        // Create a track chunk. Requires first generating all of
        // the track's /data/ chunks, so we can report an accurate length.

        var track = data.tracks[t];
        body += "MTrk";
        trackData = "";

        for (var i = 0, l = track.events.length; i < l; i++) {
            var evt = track.events[i];

            switch(evt.type) {
                
            }
        }

        body += JSMIDGEN.util.packInteger(trackData.length, 4, 4);
        body += trackData;

    }


    return header;
}
