<template>
    <section id="contact" class="section_contact">
        <div class="section_title">
            <h3>Contact Me</h3>
        </div>
        <form class="contact_form" autocomplete="off">

            <!--
                Don't remove below code in avoid to work contact form properly.
                You can chance dat-success value with your one. It will be used when user will try to contact via contact form and will get success message.
            -->
            <div class="success" data-success="Your message has been received, we will contact you soon."></div>
            <div class="empty_notice"><span>Please Fill Required Fields!</span></div>
            <!-- -->

            <div class="items_wrap">
                <div class="items">
                    <div class="item half">
                        <div class="input_wrapper">
                            <input v-model="formData.name" id="name" type="text" placeholder="Name *" />
                        </div>
                    </div>
                    <div class="item half">
                        <div class="input_wrapper">
                            <input v-model="formData.email" id="email" type="email" placeholder="Email *" />
                        </div>
                    </div>
                    <div class="item">
                        <div class="input_wrapper">
                            <input v-model="formData.phone" id="phone" type="text" placeholder="Phone" />
                        </div>
                    </div>
                    <div class="item">
                        <div class="input_wrapper">
                            <textarea v-model="formData.message" id="message" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div class="item">
                        <a v-if="formData.sending" id="send_message" class="cursor-disabled">
                            Sending <i class="fa-duotone fa-spinner-third fa-spin"></i>
                        </a>
                        <a v-else id="send_message" class="cursor-pointer">Send Message</a>
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const formData = ref({
            name: '' as string,
            email: '' as string,
            phone: '' as string,
            message: '' as string,
            sending: false as boolean
        });

        return {
            formData
        }
    },
})
</script>
