$(function () {
    $('a.new-thing').click(function () {
        $('body').append(JST.thing({
            thing: 'meh'
        }));
        return false;
    });
});
