<template>
    <div class="icon_variable" :style="style">
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
        this.style = 'background-color:' + this.color
    }
}
</script>
<style lang="scss" scoped>
.icon_variable {
    border-radius: 3px;
    box-shadow: 0 3px 3px 0 rgb(128 128 128 / 75%);
    height: 7px;
    position: relative;
    width: 16px;
}
.icon_variable:after {
    background-image: url(/images/bp_api_var_overlay.png);
    background-position: center center;
    background-repeat: no-repeat;
    content: " ";
    height: 16px;
    left: 0;
    top: -5px;
    position: absolute;
    width: 16px;
}
</style>