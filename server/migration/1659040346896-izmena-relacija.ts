import { MigrationInterface, QueryRunner } from "typeorm";

export class izmenaRelacija1659040346896 implements MigrationInterface {
    name = 'izmenaRelacija1659040346896'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`team_employees_employee\` (\`teamId\` int NOT NULL, \`employeeId\` int NOT NULL, INDEX \`IDX_b9a7a6787482be2b0ac8b4bc63\` (\`teamId\`), INDEX \`IDX_96bdab8865f5827e8ba3f7d6aa\` (\`employeeId\`), PRIMARY KEY (\`teamId\`, \`employeeId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`team_employees_employee\` ADD CONSTRAINT \`FK_b9a7a6787482be2b0ac8b4bc63a\` FOREIGN KEY (\`teamId\`) REFERENCES \`team\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`team_employees_employee\` ADD CONSTRAINT \`FK_96bdab8865f5827e8ba3f7d6aad\` FOREIGN KEY (\`employeeId\`) REFERENCES \`employee\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`team_employees_employee\` DROP FOREIGN KEY \`FK_96bdab8865f5827e8ba3f7d6aad\``);
        await queryRunner.query(`ALTER TABLE \`team_employees_employee\` DROP FOREIGN KEY \`FK_b9a7a6787482be2b0ac8b4bc63a\``);
        await queryRunner.query(`DROP INDEX \`IDX_96bdab8865f5827e8ba3f7d6aa\` ON \`team_employees_employee\``);
        await queryRunner.query(`DROP INDEX \`IDX_b9a7a6787482be2b0ac8b4bc63\` ON \`team_employees_employee\``);
        await queryRunner.query(`DROP TABLE \`team_employees_employee\``);
    }

}
