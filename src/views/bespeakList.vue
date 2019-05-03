<template>
    <div class="bespeakList">
        <van-nav-bar
            title="快速预约"
            fixed
        />
        <van-cell-group>
            <van-cell title="快速报装" is-link size='large' to='/binding' />
            <van-cell title="预约维修" is-link size='large' to='/repairFrom'/>
            <van-cell title="预约详情" is-link size='large' to='/bespeakDetails' />
        </van-cell-group>
    </div>
</template>
<script>
export default {
    data(){
        return{

        } 
    },
    methods:{

    }
}
</script>
<style scoped lang="scss">
.bespeakList{
    position: absolute;width: 100%;height: 100%;top:0;left: 0;box-sizing: border-box;background-color: #ededed;padding-top:46px;
}

</style>


