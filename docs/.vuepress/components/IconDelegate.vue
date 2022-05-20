<template>
    <div class="icon_delegate" :style="style">
	</div>
</template>
<script>
export default{
    props:['color'],
    data(){
        return {
            style:''
        }
    },
    mounted(){
        this.style = 'background-color:' + this.color + ';color:' + this.color
    }
}
</script>
<style lang="scss" scoped>
.icon_delegate {
    border-radius: 2px;
    width: 7px;
    height: 7px;
    border-width: 2px;
    border-color: #ff3b3b;
    border-style: solid;
    margin: 3px;
    position: relative;
    top: initial;
    /* right: initial; */
    box-shadow: 0 0 0 0 rgb(128 128 128 / 0%);
}
</style>