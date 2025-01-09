package university;

public class AdminStaff extends Employee {
    private String role;
    private int workingHours;

    public AdminStaff(String name, int age, String designation, double salary, String role, int workingHours) {
        super(name, age, designation, salary);
        this.role = role;
        this.workingHours = workingHours;
    }

    @Override
    public String getDetails() {
        return super.getDetails() + ", Role: " + role + ", Working Hours: " + workingHours;
    }

    @Override
    public void printDetails() {
        System.out.println(getDetails());
    }
}
