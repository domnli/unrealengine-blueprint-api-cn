<template>
    <div class="icon_array" :style="style">
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
.icon_array {
    height: 5px;
    position: relative;
    width: 5px;
    margin: 5px;
    box-shadow: -6px -6px 0 0, 0 -6px 0 0, 6px -6px 0 0, -6px 0 0 0, 6px 0 0 0, -6px 6px 0 0, 0 6px 0 0, 6px 6px 0 0;
}
</style>