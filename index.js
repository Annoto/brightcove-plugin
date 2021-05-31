videojs.registerPlugin('annotoDev', function (options) {
    var brightcovePlayer = this;
    var defaultPlayer = {
        type: 'videojs',
        element: brightcovePlayer.el()
    };

    var pluginConfig = options.config || {};
    var widgets = pluginConfig.widgets || [];
    var widget = widgets[0] || {};
    var player = widget.player || {};
    widget.player = Object.assign(player, defaultPlayer);

    var config = Object.assign(pluginConfig, { widgets: [ widget ] });

    window.Annoto.boot(config);
});