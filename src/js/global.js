export default {
    methods: {
        _image(path) {
            return new URL(`../assets/media/` + path, import.meta.url).href;
        },
        _formatPrice(number) {
            let numberStr = number.toString();
            return numberStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
    }
}