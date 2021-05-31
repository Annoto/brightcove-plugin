videojs.registerPlugin('annoto', function (options) {
    var brightcovePlayer = this;
    var playerConfig = {
        type: 'videojs',
        element: brightcovePlayer.el()
    };

    var annotoConfig = options.config || {};
    var widgets = annotoConfig.widgets || [];
    var widget = widgets[0] || {};
    var player = widget.player || {};
    widget.player = Object.assign(player, playerConfig);

    var config = Object.assign(annotoConfig, { widgets: [ widget ] });

    window.Annoto.boot(config);
});
