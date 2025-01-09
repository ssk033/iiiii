package university;

public abstract class Employee implements Person {
    protected String name;
    protected int age;
    protected String designation;
    protected double salary;

    public Employee(String name, int age, String designation, double salary) {
        this.name = name;
        this.age = age;
        this.designation = designation;
        this.salary = salary;
    }

    @Override
    public String getDetails() {
        return "Name: " + name + ", Age: " + age + ", Designation: " + designation + ", Salary: $" + salary;
    }

    @Override
    public abstract void printDetails();
}
