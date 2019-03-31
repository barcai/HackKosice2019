<template>
    <v-card-title>
        <v-icon
        color="primary"
        class="mr-5"
        size="64"
        >
        {{ mainIcon }}
        </v-icon>
        <div>
        <span class="headline font-weight-black">{{ mainTitle }}</span>
        </div>
        <v-spacer></v-spacer>
        <v-btn icon class="align-self-start" size="28">
        <v-icon>arrow_forward</v-icon>
        </v-btn>
    </v-card-title>
</template>
<script>
export default {
    props: {
        mainIcon: {
            type: String,
            default: 'payment'
        },
        mainTitle: {
            type: String,
            required: true
        }
    }
}
</script>