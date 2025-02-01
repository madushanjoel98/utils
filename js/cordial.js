function BluesLoader(divid, color = "#076fe5") {
    var style = `
    <style>
        .loader {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }

        .jimu-primary-loading:before,
        .jimu-primary-loading:after {
            position: absolute;
            top: 0;
            content: '';
        }

        .jimu-primary-loading:before {
            left: -19.992px;
        }

        .jimu-primary-loading:after {
            left: 19.992px;
            -webkit-animation-delay: 0.32s !important;
            animation-delay: 0.32s !important;
        }

        .jimu-primary-loading:before,
        .jimu-primary-loading:after,
        .jimu-primary-loading {
            background: ${color};
            -webkit-animation: loading-keys-app-loading 0.8s infinite ease-in-out;
            animation: loading-keys-app-loading 0.8s infinite ease-in-out;
            width: 13.6px;
            height: 32px;
        }

        .jimu-primary-loading {
            text-indent: -9999em;
            margin: auto;
            position: absolute;
            right: calc(50% - 6.8px);
            top: calc(50% - 16px);
            -webkit-animation-delay: 0.16s !important;
            animation-delay: 0.16s !important;
        }

        @-webkit-keyframes loading-keys-app-loading {
            0%, 80%, 100% {
                opacity: .75;
                box-shadow: 0 0 ${color};
                height: 32px;
            }

            40% {
                opacity: 1;
                box-shadow: 0 -8px ${color};
                height: 40px;
            }
        }

        @keyframes loading-keys-app-loading {
            0%, 80%, 100% {
                opacity: .75;
                box-shadow: 0 0 ${color};
                height: 32px;
            }

            40% {
                opacity: 1;
                box-shadow: 0 -8px ${color};
                height: 40px;
            }
        }
    </style>`;

    // Append style to head
    $('head').append(style);

    var render_html = `
    <div class="b-loader" id="lod12">
        <div class="justify-content-center jimu-primary-loading"></div>
    </div>`;

    $("#" + divid).html(render_html).hide();

    // Return open and close functions for external use
    return {
        open: function () {
            $("#" + divid).show();
            $(".b-loader").show();
        },
        close: function () {
            $("#" + divid).hide();
            $(".b-loader").hide();
        }
    };
}


function csvToJson(csv) {
    const lines = csv.split('\n');
    const result = [];
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentLine = lines[i].split(',');

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j].trim()] = currentLine[j]?.trim();
        }
        result.push(obj);
    }
    return result;
}
class LinearRegression {
    constructor(learningRate = 0.01, iterations = 1000) {
        this.learningRate = learningRate;
        this.iterations = iterations;
        this.weights = null;
        this.bias = null;
    }

    // Sigmoid function
    sigmoid(z) {
        return 1 / (1 + Math.exp(-z));
    }

    // Train the model using gradient descent
    train(X, y) {
        const m = X.length; // number of training examples
        this.weights = new Array(X[0].length).fill(0); // Initialize weights
        this.bias = 0; // Initialize bias

        // Gradient Descent
        for (let iter = 0; iter < this.iterations; iter++) {
            let dw = new Array(this.weights.length).fill(0); // weight gradients
            let db = 0; // bias gradient

            for (let i = 0; i < m; i++) {
                const prediction = this.predict(X[i]);
                const error = prediction - y[i];

                // Update gradients
                for (let j = 0; j < X[i].length; j++) {
                    dw[j] += error * X[i][j];
                }
                db += error;
            }

            // Update weights and bias
            for (let j = 0; j < this.weights.length; j++) {
                this.weights[j] -= (this.learningRate / m) * dw[j];
            }
            this.bias -= (this.learningRate / m) * db;

            // Optionally log the cost function to monitor convergence
            if (iter % 100 === 0) {
                console.log(`Iteration ${iter}: Cost = ${this.computeCost(X, y)}`);
            }
        }
    }

    // Predict the output for a given input
    predict(x) {
        const linearSum = this.weights.reduce((sum, weight, index) => sum + weight * x[index], this.bias);
        return this.sigmoid(linearSum); // For classification, you could use sigmoid, else linear
    }

    // Compute the cost (mean squared error)
    computeCost(X, y) {
        const m = X.length;
        let totalError = 0;

        for (let i = 0; i < m; i++) {
            const prediction = this.predict(X[i]);
            totalError += Math.pow(prediction - y[i], 2);
        }

        return totalError / m;
    }
}