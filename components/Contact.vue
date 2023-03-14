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
                            <textarea v-model="formData.content" id="message" placeholder="Content *"></textarea>
                        </div>
                    </div>
                    <div class="item">
                        <a v-if="formData.sending" id="send_message" class="cursor-disabled">
                            Sending <i class="fa-duotone fa-spinner-third fa-spin"></i>
                        </a>
                        <a v-else @click="sendContactMail()" id="send_message" class="cursor-pointer">Send Message</a>
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import useMainStore from '~~/store';

export default defineComponent({
    setup() {
        const mainStore = useMainStore();
        const { 
            API_URL
        } = mainStore;

        const formData = ref({
            name: '' as string,
            email: '' as string,
            phone: '' as string,
            content: '' as string,
            sending: false as boolean
        });

        const sendContactMail = async () => {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            });

            formData.value.sending = true;

            try {
                const response = await axios.post(`${API_URL}/contact`, {
                    name: formData.value.name,
                    email: formData.value.email,
                    phone: formData.value.phone,
                    content: formData.value.content
                });
                formData.value.sending = false;
                formData.value.name = '';
                formData.value.email = '';
                formData.value.phone = '';
                formData.value.content = '';
                Toast.fire({
                    icon: 'success',
                    title: response.data.message
                });
            } catch (error: any) {
                formData.value.sending = false;
                Toast.fire({
                    icon: 'error',
                    title: (
                        error.response
                        ?
                        error.response.data.message
                        :
                        error.message
                    )
                });
            }
        }

        return {
            formData,
            sendContactMail
        }
    },
})
</script>
