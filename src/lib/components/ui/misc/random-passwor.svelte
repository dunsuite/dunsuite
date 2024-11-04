<script lang="ts">
    let password = $state('');

    function generatePassword() {
        const length = 8;
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        password = result;
    }

    async function copyToClipboard() {
        try {
            await navigator.clipboard.writeText(password);
            alert('Password copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }
</script>

<div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
    <input type="text" value={password} readonly class="w-full p-2 mb-4 text-center border rounded-md" />
    <div class="flex gap-2">
        <button onclick={generatePassword} class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Generate</button>
        <button onclick={copyToClipboard} class="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600">Copy</button>
    </div>
</div>
