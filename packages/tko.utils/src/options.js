//
// This becomes ko.options
// --
//
// This is the root 'options', which must be extended by others.

export default {
    deferUpdates: false,
    useOnlyNativeEvents: false,
    protoProperty: '__ko_proto__',
    debug: false,
    $: window && window.jQuery,
    onError: function (e) { throw e; }
};
