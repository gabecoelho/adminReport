<template>
    <div class="posts">
        <h1>Posts</h1>
        This file will list all the posts.

    <div v-for="post in posts">
        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>
    </div>
    </div>
</template>

<script>
    import PostsService from '@/services/PostsService'
    export default {
        name: 'posts',
        data() {
            return {
                posts: []
            }
        },
        mounted() {
            this.getPosts()
        },
        methods: {
            async getPosts() {
                const response = await PostsService.fetchPosts()
                this.posts = response.data
            }
        }
    }
</script>