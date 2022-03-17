const app = new Vue(
    {
    el: '#app',
    data : {
        sliderIndex : 0,
        isInAutoScroll : null,
        sliderImages : [
            {
                image : 'https://images.unsplash.com/photo-1598770220477-cec551a23f53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0aXN0aWN8ZW58MHx8MHx8&w=1000&q=80',
                title : 'The light in the dark',
                subtitle : 'Ph : Jr Korpa',
            },
            {
                image : 'https://images.unsplash.com/photo-1498019559366-a1cbd07b5160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80',
                title : 'Anything that can go wrong will go wrong',
                subtitle : 'ph: Aziz Acharki',
            },
            {
                image : 'https://images.unsplash.com/photo-1615650949849-37db4f2c67db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
                title : 'Mankind war of the Worlds',
                subtitle : 'Ph : Khashayar Kouchpeydeh',
            },
            {
                image : 'https://images.ctfassets.net/cnu0m8re1exe/53lGAXqNnH8FSqx4swl9HS/827016cbd0746e791e28f430ddebd9a4/artisticmind.jpg',
                title : 'Creative World',
                subtitle : 'Ph: Unknown',
            },
            {
                image : 'https://mymodernmet.com/wp/wp-content/uploads/2017/02/phillip-haumesser-children-portraits-2.jpg',
                title : '100 Languages',
                subtitle : 'Ph : Unknown',
            },
            
        ],
    },
    methods : {
        nextSlide : function (){
            if(this.sliderIndex == (this.sliderImages.length -1)){
                this.sliderIndex = 0;
            } else {
                this.sliderIndex++;
            }
        },
        previousSlide : function (){
            if(this.sliderIndex == 0){
                this.sliderIndex = this.sliderImages.length -1;
            } else {
                this.sliderIndex--;
            }
        },
        imageClick: function(imageIndex){
            this.sliderIndex = imageIndex;
        },
        autoPlay : function(){
            this.isInAutoScroll = setInterval(this.nextSlide, 3000);
        },
        stopPlay: function(){
            this.isInAutoScroll = clearInterval(this.isInAutoScroll);
            this.isInAutoScroll = null;
        },
    }
});