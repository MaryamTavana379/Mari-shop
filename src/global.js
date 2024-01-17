export default {
    methods:{
        _image(path){
            return new URL(`./assets/media/` + path, import.meta.url).href;
        }
    }
}