document.getElementById('skincare-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const skinType = document.getElementById('skin-type').value;
    const skinConcerns = document.getElementById('skin-concerns').value;
    const budget = document.getElementById('budget').value;

    let routine = "Your personalized skincare routine: <br>";

    if (skinType === "dry") {
        routine += "1. Cleanser: Hydrating Cleanser <br>";
        routine += "2. Serum: Moisturizing Serum <br>";
        routine += "3. Moisturizer: Rich Cream Moisturizer <br>";
    } else if (skinType === "oily") {
        routine += "1. Cleanser: Oil-Free Cleanser <br>";
        routine += "2. Serum: Balancing Serum <br>";
        routine += "3. Moisturizer: Gel-Based Moisturizer <br>";
    } else if (skinType === "combination") {
        routine += "1. Cleanser: Gentle Cleanser <br>";
        routine += "2. Serum: Brightening Serum <br>";
        routine += "3. Moisturizer: Lightweight Moisturizer <br>";
    } else {
        routine += "1. Cleanser: Gentle Cleanser <br>";
        routine += "2. Serum: Hydrating Serum <br>";
        routine += "3. Moisturizer: Normal Moisturizer <br>";
    }

    if (skinConcerns === "acne") {
        routine += "4. Treatment: Acne Spot Treatment <br>";
    } else if (skinConcerns === "wrinkles") {
        routine += "4. Treatment: Anti-aging Cream <br>";
    } else if (skinConcerns === "hyperpigmentation") {
        routine += "4. Treatment: Brightening Cream <br>";
    } else if (skinConcerns === "sensitive") {
        routine += "4. Treatment: Soothing Gel <br>";
    } else if (skinConcerns === "dryness") {
        routine += "4. Treatment: Hydrating Mask <br>";
    }

    if (budget === "low") {
        routine += "Suggested products are budget-friendly.";
    } else if (budget === "medium") {
        routine += "Suggested products are mid-range priced.";
    } else {
        routine += "Suggested products are premium.";
    }

    document.getElementById('routine').innerHTML = routine;
    document.getElementById('result').style.display = 'block';
});
