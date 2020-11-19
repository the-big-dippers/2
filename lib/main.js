var app =new Vue({
    el:'#app',
    data:{
        name:'A',
        age: '26',
        sex: '女',
        message:'I like singing songs.'
    }
    methods:{
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
    }
}
});
