package Financial;

// Strategy Interface
interface ForecastStrategy {
    void forecast(double[] historicalData);
}

// Concrete Strategy 1
class MovingAverageStrategy implements ForecastStrategy {
    public void forecast(double[] data) {
        double sum = 0;
        for (double value : data) {
            sum += value;
        }
        double avg = sum / data.length;
        System.out.println("Moving Average Forecast: " + avg);
    }
}

// Concrete Strategy 2
class ExponentialSmoothingStrategy implements ForecastStrategy {
    public void forecast(double[] data) {
        double alpha = 0.5;
        double forecast = data[0];
        for (int i = 1; i < data.length; i++) {
            forecast = alpha * data[i - 1] + (1 - alpha) * forecast;
        }
        System.out.println("Exponential Smoothing Forecast: " + forecast);
    }
}

// Context
class ForecastContext {
    private ForecastStrategy strategy;

    public void setStrategy(ForecastStrategy strategy) {
        this.strategy = strategy;
    }

    public void executeForecast(double[] data) {
        if (strategy != null) {
            strategy.forecast(data);
        } else {
            System.out.println("No forecasting strategy selected.");
        }
    }
}

// Main class
public class Forecasting {
    public static void main(String[] args) {
        double[] pastRevenue = {100, 120, 130, 125, 140};

        ForecastContext context = new ForecastContext();

        // Use Moving Average
        context.setStrategy(new MovingAverageStrategy());
        context.executeForecast(pastRevenue);

        // Use Exponential Smoothing
        context.setStrategy(new ExponentialSmoothingStrategy());
        context.executeForecast(pastRevenue);
    }
}

