import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import { personalInfo, projects, experience, skills, achievements, certificates } from './portfolioData.ts';

describe('Portfolio Data Integrity', () => {
  describe('personalInfo', () => {
    test('contains required personal details', () => {
      assert.ok(personalInfo.name, 'Name should not be empty');
      assert.ok(personalInfo.email, 'Email should not be empty');
      assert.match(personalInfo.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email should have valid email format');
      assert.ok(personalInfo.github.includes('github.com'), 'GitHub URL should point to github.com');
      assert.ok(personalInfo.linkedin.includes('linkedin.com'), 'LinkedIn URL should point to linkedin.com');
    });
  });

  describe('projects', () => {
    test('all projects have required fields and valid schema', () => {
      assert.ok(projects.length > 0, 'Should have at least one project');
      for (const p of projects) {
        assert.ok(p.name, `Project name is required`);
        assert.ok(p.description && p.description.length > 10, `Project ${p.name} should have a descriptive summary`);
        assert.ok(Array.isArray(p.tech) && p.tech.length > 0, `Project ${p.name} must have at least one technology`);
        if (p.github) {
          assert.match(p.github, /^https?:\/\//, `Project ${p.name} github link must be a valid URL`);
        }
      }
    });

    test('projects include core repositories', () => {
      const projectNames = projects.map((p) => p.name.toLowerCase());
      assert.ok(
        projectNames.some((n) => n.includes('recoverai') || n.includes('recover')),
        'Projects should include RecoverAI'
      );
    });
  });

  describe('experience', () => {
    test('all experience items have valid metadata', () => {
      assert.ok(experience.length > 0, 'Should have experiences');
      for (const exp of experience) {
        assert.ok(exp.role, 'Role is required');
        assert.ok(exp.company, 'Company is required');
        assert.ok(exp.duration, 'Duration is required');
        assert.ok(exp.points && exp.points.length > 0, `Experience at ${exp.company} must have points`);
      }
    });
  });

  describe('skills', () => {
    test('skills are categorized with non-empty items', () => {
      const categories = Object.keys(skills);
      assert.ok(categories.length >= 3, 'Should have at least 3 skill categories');
      for (const cat of categories) {
        const items = (skills as Record<string, unknown>)[cat];
        assert.ok(Array.isArray(items) && items.length > 0, `Skill category ${cat} must not be empty`);
      }
    });
  });

  describe('achievements and certificates', () => {
    test('achievements have valid title, description, and year', () => {
      assert.ok(achievements.length > 0, 'Should have achievements');
      for (const a of achievements) {
        assert.ok(a.title, 'Achievement title is required');
        assert.ok(a.description, 'Achievement description is required');
        assert.ok(a.year, 'Achievement year is required');
      }
    });

    test('certificates have valid title, org, and PDF asset link', () => {
      assert.ok(certificates.length > 0, 'Should have certificates');
      for (const c of certificates) {
        assert.ok(c.title, 'Certificate title is required');
        assert.ok(c.org, 'Certificate organization is required');
        assert.ok(c.file.endsWith('.pdf'), 'Certificate file should reference a PDF');
      }
    });
  });
});
