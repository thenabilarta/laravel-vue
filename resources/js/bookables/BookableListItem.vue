<template>
    <div class="card w-100">
        <div class="card-body">
            <h5 class="card-title">{{ itemTitle }}</h5>
            <p class="card-text">{{ itemContent }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        itemTitle: String,
        itemContent: String,
        price: Number,
    },
};
</script>
