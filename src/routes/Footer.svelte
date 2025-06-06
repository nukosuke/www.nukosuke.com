<script lang="ts">
  import { onMount } from 'svelte';
  import { MapPin, Clock } from '@lucide/svelte';
  import {
    SiBluesky,
    SiMastodon,
    SiX,
    SiGithub,
    SiMatrix,
    SiMedium,
    SiQiita,
    SiZenn,
  } from '@icons-pack/svelte-simple-icons';
  import { PUBLIC_BASIN_FORM_ID, PUBLIC_BASIN_RECAPTCHA_SITE_KEY } from '$env/static/public';
  import * as m from '$lib/paraglide/messages';

  // Basin reCAPTCHA setup
  let recaptchaToken: string;
  onMount(() => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(PUBLIC_BASIN_RECAPTCHA_SITE_KEY, { action: 'submit' })
        .then((t: string) => {
          recaptchaToken = t;
        });
    });
  });
</script>

<svelte:head>
  <!--
       Basin + Google reCAPTCHA v3
       https://docs.usebasin.com/guides/spam-protection/#google-recaptcha-v3
  -->
  <script
    src="https://www.google.com/recaptcha/api.js?render={PUBLIC_BASIN_RECAPTCHA_SITE_KEY}"
  ></script>
</svelte:head>

<footer class="space-y-12 rounded-b bg-[#fff4e0] px-12 py-8 text-gray-700">
  <div class="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-4">
    <div class="space-y-4">
      <div>
        <h3 class="text-2xl font-bold">{m.site_title()}</h3>
        <p class="text-md font-semibold">{m.site_description()}</p>
      </div>
      <ul class="space-y-1 text-sm">
        <li>
          <div class="inline-flex gap-2">
            <span class="inline-flex items-center gap-1 font-semibold">
              <MapPin size="1em" />
              {m.footer_location()}
            </span>
            <span>・</span>
            <p>{m.footer_location_value()}</p>
          </div>
        </li>
        <li>
          <div class="inline-flex gap-2">
            <span class="inline-flex items-center gap-1 font-semibold">
              <Clock size="1em" />
              {m.footer_timezone()}
            </span>
            <span>・</span>
            <p>{m.footer_timezone_value()}</p>
          </div>
        </li>
      </ul>
      <div class="inline-flex gap-3 pt-4">
        <a href="https://bsky.app/profile/nukosuke.com"><SiBluesky size={20} title="Bluesky" /></a>
        <a href="https://mastodon.social/@nukosuke"><SiMastodon size={20} title="Mastodon" /></a>
        <a href="https://x.com/pg_nukosuke"><SiX size={20} title="X" /></a>
        <a href="https://github.com/nukosuke"><SiGithub size={20} title="GitHub" /></a>
        <a href="https://matrix.to/#/@nukosuke:matrix.org"><SiMatrix size={20} title="Matrix" /></a>
        <a href="https://medium.com/@nukosuke"><SiMedium size={20} title="Medium" /></a>
        <a href="https://qiita.com/nukosuke"><SiQiita size={20} title="Qiita" /></a>
        <a href="https://zenn.dev/nukosuke"><SiZenn size={20} title="Zenn" /></a>
      </div>
    </div>
    <form
      action="https://usebasin.com/f/{PUBLIC_BASIN_FORM_ID}"
      method="POST"
      class="w-full space-y-4"
    >
      <h3 class="text-lg font-bold">{m.footer_contact_form()}</h3>
      <div>
        <label for="email" class="mb-2 block text-sm font-medium"
          >{m.footer_contact_form_email()}</label
        >
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-yellow-700 focus:ring-yellow-700"
        />
      </div>
      <div>
        <label for="body" class="mb-2 block text-sm font-medium"
          >{m.footer_contact_form_body()}</label
        >
        <textarea
          id="body"
          name="body"
          required
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-yellow-700 focus:ring-yellow-700"
        ></textarea>
      </div>
      <div class="relative w-full">
        <button
          type="submit"
          class="absolute right-0 cursor-pointer rounded-lg bg-yellow-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-800 focus:ring-4 focus:ring-yellow-700 focus:outline-none sm:w-auto"
          >{m.footer_contact_form_submit()}</button
        >
      </div>
      <!-- reCAPTCHA -->
      <input type="hidden" name="g-recaptcha-response" value={recaptchaToken} />
      <input type="hidden" name="g-recaptcha-version" value="v3" />
    </form>
  </div>
  <p class="text-center text-sm text-gray-700">&copy; nukosuke.com (*ΦωΦ*)</p>
</footer>
