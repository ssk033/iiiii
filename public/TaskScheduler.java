abstract class Task extends Thread {

    public Task(String name, int priority) {
        super(name);
        setPriority(priority);
    }

    public abstract void execute();

    @Override
    public void run() {
        execute();
    }
}

class HighPriorityTask extends Task {
    public HighPriorityTask(String name) {
        super(name, Thread.MAX_PRIORITY);
    }

    @Override
    public void execute() {
        System.out.println(getName() + " (High Priority) started.");
        for (int i = 1; i <= 10; i++) {
            System.out.println(getName() + " - Count: " + i);
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                System.out.println(getName() + " interrupted.");
            }
        }
        System.out.println(getName() + " (High Priority) completed.");
    }
}

class LowPriorityTask extends Task {
    public LowPriorityTask(String name) {
        super(name, Thread.MIN_PRIORITY);
    }

    @Override
    public void execute() {
        System.out.println(getName() + " (Low Priority) started.");
        for (int i = 1; i <= 5; i++) {
            System.out.println(getName() + " - Count: " + i);
            try {
                Thread.sleep(200);
            } catch (InterruptedException e) {
                System.out.println(getName() + " interrupted.");
            }
        }
        System.out.println(getName() + " (Low Priority) completed.");
    }
}

public class TaskScheduler {
    public static void main(String[] args) {
        HighPriorityTask task1 = new HighPriorityTask("Task1");
        LowPriorityTask task2 = new LowPriorityTask("Task2");
        HighPriorityTask task3 = new HighPriorityTask("Task3");

        System.out.println("Starting tasks...");
        task1.start();
        task2.start();
        task3.start();

        try {
            if (task1.isAlive()) task1.join();
            if (task2.isAlive()) task2.join();
            if (task3.isAlive()) task3.join();
        } catch (InterruptedException e) {
            System.out.println("Main thread interrupted.");
        }

        System.out.println("All tasks have completed.");
    }
}
