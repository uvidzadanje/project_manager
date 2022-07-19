import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateResponsibility1658268265368 implements MigrationInterface {
    name = 'CreateResponsibility1658268265368'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`responsibility\` (\`id\` int NOT NULL AUTO_INCREMENT, \`description\` varchar(255) NOT NULL, \`teamId\` int NULL, \`projectId\` int NULL, \`employeeId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`responsibility\` ADD CONSTRAINT \`FK_2ca0dd9214ae6a696151533d765\` FOREIGN KEY (\`teamId\`) REFERENCES \`team\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`responsibility\` ADD CONSTRAINT \`FK_447e2898f16095c669f6baced9d\` FOREIGN KEY (\`projectId\`) REFERENCES \`project\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`responsibility\` ADD CONSTRAINT \`FK_cf6cb66f6ed9782477b8aecfba1\` FOREIGN KEY (\`employeeId\`) REFERENCES \`employee\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`responsibility\` DROP FOREIGN KEY \`FK_cf6cb66f6ed9782477b8aecfba1\``);
        await queryRunner.query(`ALTER TABLE \`responsibility\` DROP FOREIGN KEY \`FK_447e2898f16095c669f6baced9d\``);
        await queryRunner.query(`ALTER TABLE \`responsibility\` DROP FOREIGN KEY \`FK_2ca0dd9214ae6a696151533d765\``);
        await queryRunner.query(`DROP TABLE \`responsibility\``);
    }

}
