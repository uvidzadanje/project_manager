import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1658245303431 implements MigrationInterface {
    name = 'migrations1658245303431'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`employee_type\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`project\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`deadline_timestamp\` timestamp NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`team\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`employee\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstname\` varchar(255) NOT NULL, \`lastname\` varchar(255) NOT NULL, \`typeId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`project_teams_team\` (\`projectId\` int NOT NULL, \`teamId\` int NOT NULL, INDEX \`IDX_a7d311f774c34b41ec18ed14f5\` (\`projectId\`), INDEX \`IDX_6f617c3f27c84b38c8e35837ff\` (\`teamId\`), PRIMARY KEY (\`projectId\`, \`teamId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`employee_teams_team\` (\`employeeId\` int NOT NULL, \`teamId\` int NOT NULL, INDEX \`IDX_d560c2010b97f4c45093cf4e00\` (\`employeeId\`), INDEX \`IDX_363224e7c43dbda8c549ec76b4\` (\`teamId\`), PRIMARY KEY (\`employeeId\`, \`teamId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD CONSTRAINT \`FK_051284a3b9715659c1f219e74a6\` FOREIGN KEY (\`typeId\`) REFERENCES \`employee_type\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`project_teams_team\` ADD CONSTRAINT \`FK_a7d311f774c34b41ec18ed14f52\` FOREIGN KEY (\`projectId\`) REFERENCES \`project\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`project_teams_team\` ADD CONSTRAINT \`FK_6f617c3f27c84b38c8e35837ff7\` FOREIGN KEY (\`teamId\`) REFERENCES \`team\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`employee_teams_team\` ADD CONSTRAINT \`FK_d560c2010b97f4c45093cf4e00a\` FOREIGN KEY (\`employeeId\`) REFERENCES \`employee\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`employee_teams_team\` ADD CONSTRAINT \`FK_363224e7c43dbda8c549ec76b4d\` FOREIGN KEY (\`teamId\`) REFERENCES \`team\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employee_teams_team\` DROP FOREIGN KEY \`FK_363224e7c43dbda8c549ec76b4d\``);
        await queryRunner.query(`ALTER TABLE \`employee_teams_team\` DROP FOREIGN KEY \`FK_d560c2010b97f4c45093cf4e00a\``);
        await queryRunner.query(`ALTER TABLE \`project_teams_team\` DROP FOREIGN KEY \`FK_6f617c3f27c84b38c8e35837ff7\``);
        await queryRunner.query(`ALTER TABLE \`project_teams_team\` DROP FOREIGN KEY \`FK_a7d311f774c34b41ec18ed14f52\``);
        await queryRunner.query(`ALTER TABLE \`employee\` DROP FOREIGN KEY \`FK_051284a3b9715659c1f219e74a6\``);
        await queryRunner.query(`DROP INDEX \`IDX_363224e7c43dbda8c549ec76b4\` ON \`employee_teams_team\``);
        await queryRunner.query(`DROP INDEX \`IDX_d560c2010b97f4c45093cf4e00\` ON \`employee_teams_team\``);
        await queryRunner.query(`DROP TABLE \`employee_teams_team\``);
        await queryRunner.query(`DROP INDEX \`IDX_6f617c3f27c84b38c8e35837ff\` ON \`project_teams_team\``);
        await queryRunner.query(`DROP INDEX \`IDX_a7d311f774c34b41ec18ed14f5\` ON \`project_teams_team\``);
        await queryRunner.query(`DROP TABLE \`project_teams_team\``);
        await queryRunner.query(`DROP TABLE \`employee\``);
        await queryRunner.query(`DROP TABLE \`team\``);
        await queryRunner.query(`DROP TABLE \`project\``);
        await queryRunner.query(`DROP TABLE \`employee_type\``);
    }

}
